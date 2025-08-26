function fibonacci(n) {
  if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) {
    throw new Error("Input harus bilangan bulat >= 0");
  }

  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const seq = fibonacci(n - 1);
  seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
  return seq;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
