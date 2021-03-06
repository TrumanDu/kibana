/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React from 'react';
import { i18n } from '@kbn/i18n';
import { EuiFacetButton, EuiFieldSearch, EuiFlexGroup, EuiFlexItem, EuiIcon } from '@elastic/eui';
import { FormattedMessage } from '@kbn/i18n/react';

export interface Props {
  /**
   * triggered on input of user into search field
   */
  onChange: (field: string, value: string) => void;
  /**
   * triggered when the "additional filter btn" is clicked
   */
  onShowFilter: () => void;
  /**
   * determines whether additional filter fields are displayed
   */
  showFilter: boolean;
  /**
   * the input value of the user
   */
  value?: string;
  /**
   * the number of selected filters
   */
  filtersActive: number;
}

/**
 * Component is Discover's side bar to  search of available fields
 * Additionally there's a button displayed that allows the user to show/hide more filter fields
 */
export function DiscoverFieldSearch({
  showFilter,
  onChange,
  onShowFilter,
  value,
  filtersActive,
}: Props) {
  if (typeof value !== 'string') {
    // at initial rendering value is undefined (angular related), this catches the warning
    // should be removed once all is react
    return null;
  }
  const filterBtnAriaLabel = showFilter
    ? i18n.translate('kbn.discover.fieldChooser.toggleFieldFilterButtonHideAriaLabel', {
        defaultMessage: 'Hide field filter settings',
      })
    : i18n.translate('kbn.discover.fieldChooser.toggleFieldFilterButtonShowAriaLabel', {
        defaultMessage: 'Show field filter settings',
      });
  const searchPlaceholder = i18n.translate('kbn.discover.fieldChooser.searchPlaceHolder', {
    defaultMessage: 'Search field names',
  });

  return (
    <React.Fragment>
      <EuiFlexGroup responsive={false} gutterSize={'s'}>
        <EuiFlexItem>
          <EuiFieldSearch
            aria-label={searchPlaceholder}
            data-test-subj="fieldFilterSearchInput"
            compressed
            fullWidth
            onChange={event => onChange('name', event.currentTarget.value)}
            placeholder={searchPlaceholder}
            value={value}
          />
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiFacetButton
        aria-label={filterBtnAriaLabel}
        data-test-subj="toggleFieldFilterButton"
        className="dscToggleFieldFilterButton"
        icon={<EuiIcon type="filter" />}
        isSelected={filtersActive > 0}
        quantity={filtersActive}
        onClick={() => onShowFilter()}
      >
        <FormattedMessage
          id="kbn.discover.fieldChooser.fieldFilterFacetButtonLabel"
          defaultMessage="Filter by type"
        />
      </EuiFacetButton>
    </React.Fragment>
  );
}
