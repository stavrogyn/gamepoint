import { createJsonQuery } from '@farfetched/core';
import { runtypeContract } from '@farfetched/runtypes';
import { Record, String, Array, Number, Null } from 'runtypes';

export const signinQuery = createJsonQuery({
  request: {
    method: 'POST',
    url: () =>
      ``,
    body: () => JSON.parse('{"password":"qwerty","login": "stavrogyn"}'),
  },
  response: {
    contract: runtypeContract(
      Record({
        user: Record({
          id: Number,
          email: String,
          login: String,
          first_name: String,
          last_name: String,
          birthdate: String.Or(Null),
          address: String,
          phone: String,
          know_about_us: String.Or(Null),
          active_account: Record({
            id: Number,
            discount: String,
            level: Number,
            account_amount: String,
            experience: String,
            amount_last_mod_date: String,
            create_date: String,
          }),
        }),
        token: Record({
          token: String,
          expiration_date: String,
          user_id: Number,
        }),
      })
    ),
  },
});
