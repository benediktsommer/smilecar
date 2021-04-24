// Source: https://stackoverflow.com/questions/42736031/remove-empty-objects-from-an-object
export function clearEmpties<R>(o: R): R {
  for (const k in o) {
    if (!o[k] || typeof o[k] !== 'object') {
      continue;
    }

    if (Object.keys(o[k]).length === 0) {
      delete o[k];
    }
  }

  return o;
}
