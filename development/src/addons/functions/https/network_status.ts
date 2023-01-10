export const GetNetworkStatus = (
  online: (status: string) => void,
  offline: (status: string) => void) => {
  if (navigator.onLine === true) {
    return online("online");
  } else {
    return offline("offline");
  }
}

export const GetNetworkStatusEvent = (self: { dispatchEvent: (arg0: CustomEvent<{ onlineStatus: boolean; }>) => void; }) => {
  let newMessage = new CustomEvent('get-online-status', {
    cancelable: true,
    detail: { onlineStatus: navigator.onLine }
  });

  // dispatchEvent(newMessage);
  self.dispatchEvent(newMessage);
}