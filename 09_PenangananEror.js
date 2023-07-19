class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

const validateNumberInput = (d, e, f) => {
  if (typeof d !== "number") {
    throw new ValidationError("Argumen pertama harus number");
  }
  if (typeof e !== "number") {
    throw new ValidationError("Argumen kedua harus number");
  }
  if (typeof f !== "number") {
    throw new ValidationError("Argumen ketiga harus number");
  }
};

const detectTriangle = (a, b, c) => {
  try {
    validateNumberInput(a, b, c);
  } catch (error) {
    return error.message;
  }
  if (a === b && b === c) {
    return "Segitiga sama sisi";
  }

  if (a === b || a === c || b === c) {
    return "Segitiga sama kaki";
  }

  return "Segitiga sembarang";
};

console.log(detectTriangle(4, 4, "c"));
