import jss from 'src/lib/jss'

let style = <style>
  #navbar-logo{
    margin-top: -4px;
  }

  .register-button:hover{
    color: white;
    -webkit-box-shadow: 1px 1px 1px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 1px 1px 0px rgba(0,0,0,0.75);
    box-shadow: 1px 1px 1px 0px rgba(0,0,0,0.75);
  }

  #permission-disclamer{
    font-size: 10px;
    color: grey;
  }

  /* Custom, iPhone Retina */
  @media only screen and (min-width : 320px) {
    #permission-disclamer{
      width: 278px;
      margin: 0 auto;
      margin-top: 20px;
      text-align: center;
    }
  }

  /* MD Medium Devices, Desktops */
  @media only screen and (min-width : 992px) {
    #permission-disclamer{
      width: 278px;
      margin-left: 6px;
      margin-top: 10px;
      text-align: left;
    }
  }
</style>

jss.createStyleSheet(style, {named: false}).attach()
