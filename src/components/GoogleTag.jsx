import Script from 'next/script';

function GoogleTag() {
	return (
		<>
			<Script src='https://www.googletagmanager.com/gtag/js?id=G-LDRDH9CR55' />
			<Script id='google-analytics'>
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-LDRDH9CR55');
        `}
			</Script>
		</>
	);
}

export default GoogleTag;
