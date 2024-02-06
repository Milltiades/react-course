export default function withStyles(Component) {
    const styles = {
      color:'blue',
      fontSize: '2rem'
    }
  return () => {
    console.log('fire');
    return <Component styles={styles} />;
  };
}