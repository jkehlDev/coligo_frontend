import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/* Label dictionnary */
import labelsFr from 'labels_fr.json';

/* Externals react components */

/* Business react components */

/* Designs react components */
import { Form } from '../../designs';

/* HOC Redux actions imports */
import actions from 'store/reducers/app/actions';

/**
 * @function SearchProjects Search projects business react component
 * @param {*} props {path, exact, sensitive, strict, component, isAllowed, redirectTo}
 */
const SearchProjects = ({
  fontSize,
  location,
  perimeter,
  perimeterUnit,
  perimeterMin,
  perimeterMax,
  perimeterStep,
  archived,
  onSubmit,
  ctrlStringFields,
  ctrlNumberFields,
  ctrlBoolFields,
}) => {
  return (
    <Form
      title={labelsFr.business.searchProjects.form.title}
      fontSize={fontSize}
      onSubmit={onSubmit}
    >
      <Form.Group>
        <Form.InputText
          id="location"
          label={labelsFr.business.searchProjects.form.fields.location}
          required
          value={location}
          onChange={ctrlStringFields}
        />
        <Form.InputRange
          id="perimeter"
          label={labelsFr.business.searchProjects.form.fields.perimeter}
          min={perimeterMin}
          max={perimeterMax}
          step={perimeterStep}
          unit={perimeterUnit}
          value={perimeter}
          onChange={ctrlNumberFields}
        />
      </Form.Group>
      <Form.Toggle
        id="archived"
        label={labelsFr.business.searchProjects.form.fields.archived}
        value={archived}
        onChange={ctrlBoolFields}
      />
      <Form.Button
        id="submit"
        type="submit"
        title="Chercher"
        icon="search"
        fontSize="S"
      />
    </Form>
  );
};

/* HOC Redux container implementation */
/* PropTypes definition */
SearchProjects.propTypes = {
  /* State part*/
  fontSize: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  perimeter: PropTypes.number.isRequired,
  perimeterUnit: PropTypes.string.isRequired,
  perimeterMin: PropTypes.number.isRequired,
  perimeterMax: PropTypes.number.isRequired,
  perimeterStep: PropTypes.number.isRequired,
  archived: PropTypes.bool.isRequired,
  /* Dispatch part */
  onSubmit: PropTypes.func.isRequired,
  ctrlStringFields: PropTypes.func.isRequired,
  ctrlNumberFields: PropTypes.func.isRequired,
  ctrlBoolFields: PropTypes.func.isRequired,
};

/* Props default value definition */
SearchProjects.defaultProps = {};
/**
 * @function mapStateToProps
 * @param {*} state Current redux state
 * @param {*} _ OwnProps (notuse)
 */
const mapStateToProps = (state, _) => ({
  fontSize: state.app.business.searchProjects.default.fontSize,
  location: state.app.business.searchProjects.fields.location,
  perimeter: state.app.business.searchProjects.fields.perimeter,
  perimeterUnit: state.app.business.searchProjects.default.perimeterUnit,
  perimeterMin: state.app.business.searchProjects.default.perimeterMin,
  perimeterMax: state.app.business.searchProjects.default.perimeterMax,
  perimeterStep: state.app.business.searchProjects.default.perimeterStep,
  archived: state.app.business.searchProjects.fields.archived,
});
/**
 * @function mapDispatchToProps
 * @param {*} dispatch
 * @param {*} _ OwnProps (notuse)
 */
const mapDispatchToProps = (dispatch, _) => ({
  onSubmit: (_) => {
    dispatch(actions.business.searchProjects.clearFields());
  },
  ctrlStringFields: (event) => {
    dispatch(
      actions.business.searchProjects.updateFields({
        [event.target.id]: `${event.target.value}`,
      })
    );
  },
  ctrlNumberFields: (event) => {
    dispatch(
      actions.business.searchProjects.updateFields({
        [event.target.id]: parseFloat(event.target.value),
      })
    );
  },
  ctrlBoolFields: (event) => {
    dispatch(
      actions.business.searchProjects.updateFields({
        [event.target.id]: event.target.checked,
      })
    );
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchProjects);
