 var text=[]
 function forLoop(text){
  for(let i=0;i<25;i++){
  if (i=1){
  text=text.push("I am ${i} strange loop.")
}else{
  text=text.push("I am ${i} strange loops.")
}
}
return text
}
