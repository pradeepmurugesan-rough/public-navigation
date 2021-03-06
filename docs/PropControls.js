/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import Types from 'prop-types';
import { Checkbox, Select } from '@transferwise/components';

import { LOCALES } from '../src';

const PropControls = ({
  inverse,
  onInverseChange,
  languages,
  language,
  onLanguageChange,
  locales,
  locale,
  onLocaleChange,
  activePath,
  onActivePathChange,
  isUserLoggedIn,
  onUserLoggedInChange,
  hasUserPreviouslyLoggedIn,
  onHasUserPreviouslyLoggedInChange,
}) => (
  <div className="row">
    <div className="col-lg-3">
      <div className="form-group">
        <label className="control-label" htmlFor="inverse">
          Color
        </label>
        <Checkbox label="Inverse" name="inverse" onChange={onInverseChange} checked={inverse} />
      </div>
    </div>
    <div className="col-lg-3">
      <div className="form-group">
        <label className="control-label" htmlFor="language">
          Language
        </label>

        <Select
          selected={{ value: language, label: language }}
          options={languages.map(lang => ({ value: lang, label: lang }))}
          onChange={selection => (selection ? onLanguageChange(selection.value) : () => {})}
        />
      </div>
    </div>
    <div className="col-lg-3">
      <div className="form-group">
        <label className="control-label" htmlFor="locale">
          Locale
        </label>

        <Select
          selected={{ value: locale, label: locale }}
          options={locales.map(loc => ({ value: loc, label: loc }))}
          onChange={selection => (selection ? onLocaleChange(selection.value) : () => {})}
        />
      </div>
    </div>
    <div className="col-lg-3">
      <div className="form-group">
        <label className="control-label" htmlFor="active-path">
          Active path
        </label>
        <input
          id="active-path"
          onChange={e => onActivePathChange(e.target.value)}
          className="form-control"
          value={activePath}
        />
      </div>
    </div>
    <div className="col-lg-3">
      <div className="form-group">
        <label className="control-label" htmlFor="isUserLoggedIn">
          Is user logged in?
        </label>
        <Checkbox
          label="Logged in"
          name="isUserLoggedIn"
          onChange={onUserLoggedInChange}
          checked={isUserLoggedIn}
        />
      </div>
    </div>
    <div className="col-lg-3">
      <div className="form-group">
        <label className="control-label" htmlFor="hasUserPreviouslyLoggedIn">
          Has user previously logged in?
        </label>
        <Checkbox
          label="Previously logged in"
          name="hasUserPreviouslyLoggedIn"
          onChange={onHasUserPreviouslyLoggedInChange}
          checked={hasUserPreviouslyLoggedIn}
        />
      </div>
    </div>
  </div>
);

PropControls.propTypes = {
  inverse: Types.bool.isRequired,
  onInverseChange: Types.func.isRequired,
  languages: Types.arrayOf(Types.string).isRequired,
  language: Types.string.isRequired,
  onLanguageChange: Types.func.isRequired,
  locales: Types.arrayOf(Types.string).isRequired,
  locale: Types.oneOf(LOCALES).isRequired,
  onLocaleChange: Types.func.isRequired,
  activePath: Types.string.isRequired,
  onActivePathChange: Types.func.isRequired,
  isUserLoggedIn: Types.bool.isRequired,
  onUserLoggedInChange: Types.func.isRequired,
  hasUserPreviouslyLoggedIn: Types.bool.isRequired,
  onHasUserPreviouslyLoggedInChange: Types.func.isRequired,
};

export default PropControls;
