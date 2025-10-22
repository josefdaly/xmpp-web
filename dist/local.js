// eslint-disable-next-line no-unused-vars, no-var
var config = {
  name: 'Hackerchat',
  transports: {
    websocket: 'wss://hackerchat.net/xmpp-websocket',
  },
  hasGuestAccess: true,
  hasRegisteredAccess: true,
  anonymousHost: null,
  // anonymousHost: 'anon.domain-xmpp.ltd',
  isTransportsUserAllowed: false,
  hasHttpAutoDiscovery: false,
  resource: 'Hackerchat',
  defaultDomain: 'hackerchat.net',
  defaultMuc: null,
  // defaultMuc: 'conference.domain-xmpp.ltd',
  isStylingDisabled: false,
  hasSendingEnterKey: false,
  connectTimeout: 5000,
  pinnedMucs: [],
  logoUrl: '',
  sso: {
    endpoint: false,
    jidHeader: 'jid',
    passwordHeader: 'password',
  },
  guestDescription: '',
}
