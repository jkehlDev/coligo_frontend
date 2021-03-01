import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/* Label dictionnary */
import labelsFr from 'labels_fr.json';

/* Designs react components */
import { Form } from '../../designs';

/* HOC Redux actions imports */
import actions from 'store/app/actions';

/**
 * @function SearchProjects Search projects business react component
 * @param {*} props 
 */
const SearchProjects = ({
  fontSize,
  location,
  perimeter,
  archived,
  perimeterUnit,
  perimeterMin,
  perimeterMax,
  perimeterStep,
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
  archived: PropTypes.bool.isRequired,
  perimeterUnit: PropTypes.string.isRequired,
  perimeterMin: PropTypes.number.isRequired,
  perimeterMax: PropTypes.number.isRequired,
  perimeterStep: PropTypes.number.isRequired,
  /* Dispatch part */
  onSubmit: PropTypes.func.isRequired,
  ctrlStringFields: PropTypes.func.isRequired,
  ctrlNumberFields: PropTypes.func.isRequired,
  ctrlBoolFields: PropTypes.func.isRequired,
};

/**
 * @function mapStateToProps
 * @param {*} state Current redux state
 * @param {*} _ OwnProps (notuse)
 */
const mapStateToProps = (state, _) => ({
  fontSize: state.app.display.fontSize,
  location: state.app.business.searchProjects.fields.location,
  perimeter: state.app.business.searchProjects.fields.perimeter,
  archived: state.app.business.searchProjects.fields.archived,
  perimeterUnit: state.app.business.searchProjects.default.perimeterUnit,
  perimeterMin: state.app.business.searchProjects.default.perimeterMin,
  perimeterMax: state.app.business.searchProjects.default.perimeterMax,
  perimeterStep: state.app.business.searchProjects.default.perimeterStep,
});
/**
 * @function mapDispatchToProps
 * @param {*} dispatch
 * @param {*} _ OwnProps (notuse)
 */
const mapDispatchToProps = (dispatch, _) => ({
  onSubmit: (_) => {
    dispatch(actions.execute.business.searchProjects.search());
  },
  ctrlStringFields: (event) => {
    dispatch(
      actions.store.business.searchProjects.updateFields({
        [event.target.id]: `${event.target.value}`,
      })
    );
  },
  ctrlNumberFields: (event) => {
    dispatch(
      actions.store.business.searchProjects.updateFields({
        [event.target.id]: parseFloat(event.target.value),
      })
    );
  },
  ctrlBoolFields: (event) => {
    dispatch(
      actions.store.business.searchProjects.updateFields({
        [event.target.id]: event.target.checked,
      })
    );
  },
});

/* Export business component */
export default connect(mapStateToProps, mapDispatchToProps)(SearchProjects);
