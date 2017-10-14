import { CONTACT_REQUEST, CONTACT_SUCCESS, CONTACT_FAILURE } from '../../redux/modules/constants';

export function contactEnzoAmes(body) {
  return {
    types: [CONTACT_REQUEST, CONTACT_SUCCESS, CONTACT_FAILURE],
    promise: (client) => client.post('api/ea/contactenzoames/', {
      data: body,
      authenticated: true,
    })
  };
}
