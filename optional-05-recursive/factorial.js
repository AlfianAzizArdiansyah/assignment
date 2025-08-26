function factorial(n) {
  if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) {
    throw new Error("Input harus bilangan bulat >= 0");
  }

  if (n === 0 || n === 1) return 1;

  return n * factorial(n - 1);
}

// Jangan hapus kode di bawah ini!
export default factorial;
