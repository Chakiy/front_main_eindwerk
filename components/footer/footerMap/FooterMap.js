function FooterMap({ height = "500" }) {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2500.1620357980564!2d3.2156622155086607!3d51.1976658795854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c350e753120e21%3A0xe17df23b83046877!2sBruges%20%2F%20Brugge!5e0!3m2!1sru!2sus!4v1622993151897!5m2!1sru!2sus"
        width="100%"
        height={height}
        loading="lazy"
      ></iframe>
    </>
  );
}

export default FooterMap;
