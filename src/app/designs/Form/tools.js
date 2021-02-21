/* Import React for find by type function */
import React from 'react';
/* Label dictionnary */
import labelsFr from 'labels_fr.json';

/**
 * @function getDefaultTips Obtain default tips non-structured message
 * @param {boolean} required true id required value
 * @param {boolean} emptied true id epty value or not string type
 * @param {boolean} validated true if validated by validator
 * @returns Default tips non-structured message
 */
export const getDefaultTips = (required, emptied, validated) =>
  required
    ? emptied
      ? labelsFr.designs.input.validator.default_required
      : validated
      ? labelsFr.designs.input.validator.default_valid
      : labelsFr.designs.input.validator.default_invalid
    : emptied
    ? labelsFr.designs.input.validator.default_optional
    : validated
    ? labelsFr.designs.input.validator.default_valid
    : labelsFr.designs.input.validator.default_invalid;

/**
 * @function getValidityState Obtain validation state with tips messages
 * @param {boolean} value target value to test
 * @param {boolean} required true id required value
 * @param {boolean} emptied true id epty value or not string type
 * @param {CallableFunction} validator Validation process
 * @param {*} extValidityState External validity State if existe
 * @returns validity State
 */
export const getValidityState = (
  value,
  required,
  emptied,
  validator,
  extValidityState
) => {
  /* Obtain validation state from external validation or executing inner validation process */
  const validated =
    extValidityState === undefined ? validator(value) : extValidityState;
  /* Obtain default tips message */
  const defaultTips =
    validated.tips === undefined
      ? getDefaultTips(required, emptied, validated.state)
      : validated.tips;

  /* Return validation state */
  return {
    state: validated.state,
    tips: defaultTips,
    structuredTips:
      validated.structuredTips === undefined
        ? defaultTips
        : validated.structuredTips,
  };
};

/**
 * @function isEmptied Obtain if value is empty
 * @param {*} value
 * @returns True if target value empty or not string type
 */
export const isEmptied = (value) =>
  typeof value !== 'string' || value.trim() === '';

/**
 * @function findByType Find by type component in children
 * @param {*} children Components Array
 * @param {*} component Target component we looking for
 * @returns Components list search result
 */
export const findByType = (children, component) => {
  const result = [];
  const type = [component.displayName] || [component.name];
  React.Children.forEach(children, (child) => {
    const childType =
      child && child.type && (child.type.displayName || child.type.name);
    if (type.includes(childType)) {
      result.push(child);
    }
  });
  return result;
};

/**
 * @function removeByType Remove by type component in children
 * @param {*} children Components Array
 * @param {*} component Target component we looking for
 * @returns Components list filter result
 */
export const removeByType = (children, component) => {
  const result = [];
  const type = [component.displayName] || [component.name];
  React.Children.forEach(children, (child) => {
    const childType =
      child && child.type && (child.type.displayName || child.type.name);
    if (!type.includes(childType)) {
      result.push(child);
    }
  });
  return result;
};
