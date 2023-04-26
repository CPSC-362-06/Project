const profanityList = ['fuck', 'bitch', 'cunt', 'gay', 'beiner', 'nigga', 'nigger', 'chink', 'gook', 'jew', 'nazi', 'dyke', 'ass', 'asshole', 'motherfucker'];

function censorText(text) {
  profanityList.forEach((profanity) => {
    const regex = new RegExp(profanity, 'gi'); // create a regular expression for each profanity in the list
    text = text.replace(regex, '****'); // replace every occurrence of the profanity with asterisks
  });
  return text;
}

function sendMessage(message) {
  const censoredMessage = censorText(message); // censor the message before sending it
}