import React, { Component, PropTypes } from 'react';
import { compose } from 'redux';
import { Field, reduxForm, propTypes as formPropTypes } from 'redux-form';
import { intlShape, injectIntl } from 'react-intl';
import { isEqual } from 'lodash';
import { arrayMove } from 'react-sortable-hoc';
import config from '../../config';
import { noEmptyArray, required } from '../../util/validators';
import {
  AddImages,
  Button,
  Input,
  StripeBankAccountToken,
  ValidationError
} from '../../components';

import css from './EditListingPhotosForm.css';

const ACCEPT_IMAGES = 'image/*';

// Add image wrapper. Label is the only visible element, file input is hidden.
const RenderAddImage = props => {
  const { accept, input, label, type } = props;
  const { name, onChange } = input;
  const inputProps = { accept, id: name, name, onChange, type };
  return (
    <div className={css.addImageWrapper}>
      <div className={css.aspectRatioWrapper}>
        <Input {...inputProps} className={css.addImageInput} />
        <label htmlFor={name} className={css.addImage}>{label}</label>
      </div>
    </div>
  );
};

const { bool, func, object, shape, string } = PropTypes;

RenderAddImage.propTypes = {
  accept: string.isRequired,
  input: shape({
    value: object,
    onChange: func.isRequired,
    name: string.isRequired,
  }).isRequired,
  label: string.isRequired,
  type: string.isRequired,
};

export class EditListingPhotosFormComponent extends Component {
  constructor(props) {
    super(props);
    this.onImageUploadHandler = this.onImageUploadHandler.bind(this);
    this.onSortEnd = this.onSortEnd.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(this.props.images, nextProps.images)) {
      nextProps.change('images', nextProps.images);
    }
  }

  onImageUploadHandler(event) {
    const file = event.target.files[0];
    if (file) {
      this.props.onImageUpload({ id: `${file.name}_${Date.now()}`, file });
    }
  }

  onSortEnd({ oldIndex, newIndex }) {
    const images = arrayMove(this.props.images, oldIndex, newIndex);
    this.props.onUpdateImageOrder(images.map(i => i.id));
  }

  render() {
    const {
      disabled,
      handleSubmit,
      images,
      intl,
      invalid,
      saveActionMsg,
      submitting,
      stripeConnected,
    } = this.props;

    const imageRequiredMessage = intl.formatMessage({ id: 'EditListingPhotosForm.imageRequired' });
    const bankAccountNumberRequiredMessage = intl.formatMessage({
      id: 'EditListingPhotosForm.bankAccountNumberRequired',
    });

    // TODO This will be defined in the stripe popup form later.
    // When that's ready, remove country from initialValues and hidden field.
    const country = this.props.initialValues.country;
    const showBankAccountField = !stripeConnected;
    const currency = config.currencyConfig.currency;

    return (
      <form onSubmit={handleSubmit}>

        <AddImages images={images} onSortEnd={this.onSortEnd}>
          <Field
            accept={ACCEPT_IMAGES}
            component={RenderAddImage}
            label="+ Add image"
            name="addImage"
            onChange={this.onImageUploadHandler}
            type="file"
          />

          <Field
            component={props => {
              const { input, type, meta } = props;
              return (
                <div className={css.imageRequiredWrapper}>
                  <Input {...input} type={type} />
                  <ValidationError className={css.imageRequiredError} fieldMeta={meta} />
                </div>
              );
            }}
            name="images"
            type="hidden"
            validate={[noEmptyArray(imageRequiredMessage)]}
          />
        </AddImages>

        <Field component="input" name="country" type="hidden" value={country} />
        {showBankAccountField
          ? <Field
              name="bankAccountToken"
              component={StripeBankAccountToken}
              props={{ country, currency }}
              validate={required(bankAccountNumberRequiredMessage)}
            />
          : null}

        <Button
          className={css.submitButton}
          type="submit"
          disabled={invalid || submitting || disabled}
        >
          {saveActionMsg}
        </Button>
      </form>
    );
  }
}

EditListingPhotosFormComponent.defaultProps = { saveActionMsg: 'Publish listing' };

EditListingPhotosFormComponent.propTypes = {
  ...formPropTypes,
  intl: intlShape.isRequired,
  onImageUpload: func.isRequired,
  onUpdateImageOrder: func.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string,
  stripeConnected: bool.isRequired,
};

const formName = 'EditListingPhotosForm';

export default compose(reduxForm({ form: formName }), injectIntl)(EditListingPhotosFormComponent);