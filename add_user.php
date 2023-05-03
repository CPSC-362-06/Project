<?php
// Get the new user data from the POST request
$newUser = $_POST["newUser"];

// Load the accounts.xml file into a SimpleXML object
$accounts = simplexml_load_file("accounts.xml");

// Create a new user element and add it to the XML document
$newUserXML = new SimpleXMLElement($newUser);
$newUserElement = $accounts->addChild("user");
$newUserElement->addChild("name", $newUserXML->name);
$newUserElement->addChild("cwid", $newUserXML->cwid);
$newUserElement->addChild("email", $newUserXML->email);
$newUserElement->addChild("password", $newUserXML->password);

// Save the updated XML document back to the accounts.xml file
$accounts->asXML("accounts.xml");
?>

