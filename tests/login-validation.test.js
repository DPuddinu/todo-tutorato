//Minimum eight characters, at least one letter, one number and one special character:
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

test("password min lenght should be 8", () => {
  expect(passwordRegex.test("dr55")).toBe(false);
});

test("password max lenght should be 15", () => {
  expect(passwordRegex.test("Drizzt3*2Do")).toBe(true);
});

test("password must contain special character", () => {
  expect(passwordRegex.test("Rr$h7hhjh")).toBe(true);
});

test("password must not contain only numbers & letters(a-z, A-Z)", () => {
  expect(passwordRegex.test("Rr78h7hhjh")).toBe(false);
});

test("password should contain special character, maiusc and number", () => {
  expect(passwordRegex.test("Dyjh47%B")).toBe(true);
});

test("password must not contain only letters", () => {
  expect(passwordRegex.test("Dyjh6fg%Bk")).toBe(true);
});

test("some special characters aren't included (€, £, +, ', -, point, comma, :, ;, blankspace, _, /, |, =, ^, à, è, ì, ò, ù, ç, é, °, <>, >, (), [], {})", () => {
  expect(passwordRegex.test("S=fg£$4bH")).toBe(false);
});

test("password must contain upper case letters", () => {
  expect(passwordRegex.test("ld0$rfkhjh")).toBe(false);
});

test("password shouldn't be null/empty", () => {
  expect(passwordRegex.test("")).toBe(false);
});
