/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { FormattedMessage } from '@osd/i18n/react';
import {
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiTitle,
  EuiPageContent,
  EuiSpacer,
  EuiText,
  EuiPageContentBody,
  EuiFlexItem,
  EuiFlexGroup,
  EuiButton,
} from '@elastic/eui';

export const EmptyState = () => {
  return (
    <>
      <EuiPageContent
        className="pitEmptyState"
        grow={false}
        style={{ minHeight: '70vh' }}
        horizontalPosition="center"
        data-test-subj="pointInTimeEmptyState"
      >
        <EuiPageContentHeader>
          <EuiPageContentHeaderSection>
            <EuiTitle>
              <h1>
                <FormattedMessage
                  id="pointInTimeManagement.pointInTime.header.pointInTimeTitle"
                  defaultMessage="Point in Time"
                />
              </h1>
            </EuiTitle>
          </EuiPageContentHeaderSection>
          <EuiButton fill={true} iconType="plusInCircle">
            Create point in time
          </EuiButton>
        </EuiPageContentHeader>
        <EuiText size="s">
          <p>
            <FormattedMessage
              id="pointInTimeManagement.pointInTime.pointInTimeDescription"
              defaultMessage="Create and manage point in time objects to help you retrieve data from OpenSearch."
            />
          </p>
        </EuiText>
        <EuiSpacer size="m" />
        <EuiPageContentBody>
          <EuiFlexGroup
            style={{ minHeight: '50vh' }}
            alignItems="center"
            justifyContent="center"
            direction="column"
          >
            <EuiFlexItem grow={false}>No point in time objects have been created yet.</EuiFlexItem>
            <EuiSpacer />
            <EuiButton>Create point in time</EuiButton>
          </EuiFlexGroup>
        </EuiPageContentBody>
      </EuiPageContent>
    </>
  );
};
