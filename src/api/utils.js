export const urlJoin = (service) => (url) => {
  return `${process.env.REACT_APP_ENDPOINT}/api/v1/${service}/${url ?? ""}`;
};
