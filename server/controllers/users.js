const controller = {

    index: (req, res, next) => {
        res.render('users', { 
          title: 'Usuários',
          subtitle: 'do site do Rhaim!'
      
      });
}}

module.exports = controller