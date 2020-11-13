var elForm = document.querySelector('.js-form');
var elTelName = elForm.querySelector('.js-form-name');
var elTelSurname = elForm.querySelector('.js-form-surname');
var elTelNumber = elForm.querySelector('.js-form-tel');
var elTelAuthor = elForm.querySelector('.js-form-author');
var results= document.querySelector('.results');
var infoTelBook = [];//+999(45)-456-65-65
elForm.addEventListener('submit' , function(evt){
  evt.preventDefault();
  var elTelNameValue = elTelName.value.trim();
  var elTelSurnameValue = elTelSurname.value.trim();
  var elTelNumberValue = parseInt(elTelNumber.value.trim() , 10 );
  var elTelAuthorValue = elTelAuthor.value.trim();
  
  var isEmpty = elTelNameValue === "" || elTelSurnameValue === "" || elTelNumberValue === "" || elTelAuthorValue === "" ;
  
  if (isEmpty){
    alert('Bo`shliqlarnilarni to`g`irlang , iltimos :)');
    return;
  };
  
  if (isNaN(elTelNumberValue)){
    alert('Son kiriting  , iltimos :)');
    return;
  };
  
  results.innerHTML = "" ;
  infoTelBook.push(
    {
      name : elTelNameValue , 
      surname : elTelSurnameValue , 
      number : elTelNumberValue , 
      author : elTelAuthorValue 
    }
    );
    
    for(var i = 0; i < infoTelBook.length ; i++){
      
      var newElTelInfoList = document.createElement('ul');
      newElTelInfoList.classList.add('list-group' , 'mt-1' , 'w-100' , 'list-group-horizontal-xl');
      
      //long way
      
      // var newElTelName = document.createElement('li');
      // newElTelName.classList.add('list-group-item'    , 'w-25' , 'text-center');
      // newElTelName.textContent = infoTelBook[i].name ; 
      // newElTelInfoList.appendChild(newElTelName);
      
      
      // var newElTelSurname = document.createElement('li');
      // newElTelSurname.classList.add('list-group-item'    , 'w-25' , 'text-center');
      // newElTelSurname.textContent = infoTelBook[i].surname ; 
      // newElTelInfoList.appendChild(newElTelSurname);
      
      // var newElTelNumber = document.createElement('li');
      // newElTelNumber.classList.add('list-group-item'    , 'w-25' , 'text-center');
      // newElTelNumber.textContent = infoTelBook[i].number ; 
      // newElTelInfoList.appendChild(newElTelNumber);
      
      // var newElTelAuthor = document.createElement('li');
      // newElTelAuthor.classList.add('list-group-item'    , 'w-25' , 'text-center');
      // newElTelAuthor.textContent = infoTelBook[i].author ; 
      // newElTelInfoList.appendChild(newElTelAuthor);
      
      // shortcut :))
      var objectValues =  Object.values(infoTelBook[i]) ;
      
      for (var j = 0 ; j < objectValues.length ; j++){
        
        var newElTelItem = document.createElement('li');
        newElTelItem.classList.add('list-group-item' , 'w-25' , 'text-center');
        newElTelItem.textContent = objectValues[j]; 
        newElTelInfoList.appendChild(newElTelItem);
        
      }
      results.appendChild(newElTelInfoList);
    };
  });