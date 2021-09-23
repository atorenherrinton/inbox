export const validateEmailAddress = (emailAddress: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(emailAddress.toLowerCase());
};

export const checkForDuplicate = (
  emailAddress: string,
  emailAddresses: Array<string>
) => {
  if (!emailAddresses.includes(emailAddress)) {
    return true;
  }
};