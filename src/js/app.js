// const devURL = 'http://localhost:3000/api/v1/submissions';
// const prodURL = 'https://form-component-api.herokuapp.com/api/v1/submissions';

import 'coriander';

var $form = document.querySelector('.form');
$form.coriander({
  onChange: true
});
