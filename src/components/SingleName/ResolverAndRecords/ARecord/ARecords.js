import React from 'react'
import {
  RecordsItem,
  RecordsContent,
  RecordsKey,
  RecordsSubKey,
  RecordsValue
} from '../DetailsItem'

import { validateRecord } from '../../../../utils/records'

const validator = (symbol, value) => {
  return validateRecord({
    type: 'aRecords',
    value
  })
}

const PLACEHOLDER_RECORDS = ['You Server IP']

const getPlaceholder = () => {
  return `Enter an IP address`
}

export default function ARecords({
  domain,
  keyName,
  value,
  type,

  changedRecords,
  variableName,
  account,
  editing,
  updatedRecords,
  setUpdatedRecords
}) {
  const { contentType } = domain
  const { authorized, newValue } = state
  console.log('A records input', contentType, authorized, updatedRecords)
  return (
    <RecordsItem editing={editing} hasRecord={true}>
      {editing ? (
        <RecordInput
          testId="content-record-input"
          onChange={event => {
            const value = event.target.value
            setUpdatedRecords(records => ({
              ...records,
              content: value
            }))
          }}
          hasBeenUpdated={hasBeenUpdated}
          value={value}
          dataType={type}
          contentType={domain.contentType}
          isValid={isValid}
          isInvalid={isInvalid}
        />
      ) : (
        <RecordsValue
          {...props}
          records={props.updatedRecords.aRecords}
          placeholderRecords={PLACEHOLDER_RECORDS}
          validator={validator}
          getPlaceholder={getPlaceholder}
          setUpdatedRecords={props.setUpdatedRecords}
          recordType="aRecords"
        />
      )}
    </RecordsItem>
  )
}
