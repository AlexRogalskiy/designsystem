import React from 'react';
import { bool } from 'prop-types';
import { Checkbox } from '@sb1/ffe-form-react';

import { accountFormatter, balanceWithCurrency } from '../../util/format';
import { Account, Locale } from '../../util/types';

function AccountSuggestionMulti({ account, locale, selected }) {
    const { accountNumber, balance, name, currencyCode } = account;
    const hasBalance = balance !== null;
    return (
        <div className="ffe-account-suggestion__account--multi">
            <Checkbox
                checked={selected}
                name="my-checkbox-label"
                inline={false}
                tabIndex={-1}
                disabled={true}
            />
            <div className="ffe-account-suggestion__content-wrapper">
                <span className="ffe-account-suggestion__name ffe-link-text ffe-link-text--no-underline">
                    {name}
                </span>
                <div className="ffe-account-suggestion__details">
                    <span className="ffe-account-suggestion__number">
                        {accountFormatter(accountNumber)}
                    </span>
                    {hasBalance && (
                        <span className="ffe-account-suggestion__balance">
                            {balanceWithCurrency(balance, locale, currencyCode)}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

AccountSuggestionMulti.propTypes = {
    account: Account.isRequired,
    locale: Locale.isRequired,
    selected: bool.isRequired,
};

AccountSuggestionMulti.defaultProps = {
    selected: false,
};

export default AccountSuggestionMulti;
