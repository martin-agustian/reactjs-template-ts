export const isEmpty = (value: any): boolean => {
	let isEmpty: boolean = false;

  if (value === null || value === undefined) {
    isEmpty = true;
  }

  if (typeof value === "string" && value === "") {
    isEmpty = true
  }

	if (typeof value === "object" && Object.keys(value).length === 0) {
    isEmpty = true;
	}

	return isEmpty;
};

export const isEmail = (value: string): boolean => {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
};

export const isPhone = (value: string): boolean => {
  let isPhone: boolean = false;

  let regEx: RegExp = /(^\+\d*$|^\d{3}[-]\d*$|^\(?\d{2,3}\)\d*$|^\d*$)/;

  if (regEx.test(value)) {
    let phone: string = value;
    phone = phone.replace(/[-()+]/g, '');

    if (phone.length >= 10 && phone.length <= 20) {
      isPhone = true;
    }  
  }

  return isPhone;
}
