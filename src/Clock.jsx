export default function Clock() {
   
    return (
  <></>
    );
  }
  

  //Differences:
// Purpose:

// useCallback is primarily for memoizing functions to prevent unnecessary re-creations.
// useMemo is for memoizing values to avoid unnecessary recalculations.
// Usage:

// Use useCallback when dealing with functions, especially when passing them as props.
// Use useMemo when dealing with calculated values or expensive computations.
// Return Type:

// useCallback returns a memoized version of the callback function.
// useMemo returns the memoized value itself.
// Dependency Array:

// Both hooks accept a dependency array to specify when the memoized value should be recalculated.
// In useCallback, the dependencies are used to decide when to create a new memoized function.
// In useMemo, the dependencies are used to decide when to recalculate the memoized value.
// In summary, while useCallback is designed for functions, useMemo is more general-purpose and can be used for any value. They both contribute to performance optimization by avoiding unnecessary computations or re-renders.