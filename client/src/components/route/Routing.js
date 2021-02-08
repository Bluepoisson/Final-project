const Routing = () => {
  const accessToken = useSelector(state => state.login.accessToken);
  return (
    <Container>
      {accessToken && (
	    <>
      <ReviewForm />
      <MapContainer />
      <ClinicsList />
</>
	  )}
	  {!accessToken && (
      <>
       <StartPage /> 
       <SignupForm />
      </>
    )}
    </Container>
  )
}