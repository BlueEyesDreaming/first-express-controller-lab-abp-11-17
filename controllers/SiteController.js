class SiteController {
  constructor(xxx,yyy) {
    this.xxx = xxx;
    this.yyy = yyy



    SiteController.get('/', function(req,resp){
      resp.render('index')
    })

    SiteController.get('/about', function(req,resp){

      resp.render('about')
    })

    SiteController.get('/contact', function(req,resp){
      resp.render('contact')
    })

  }
  cccc() {
    console.log?
  }
}
