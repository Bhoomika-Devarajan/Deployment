class MessageParser {
    /**
     * Constructs the MessageParser instance.
     * 
     * @param {Object} actionProvider - An instance of the ActionProvider class.
     * This is used to trigger specific actions based on the parsed message.
     */
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    /**
     * Parses the incoming message and triggers appropriate actions 
     * in the ActionProvider based on the content of the message.
     * 
     * @param {string} message - The incoming message from the user.
     */
    parse(message) {
      const lowercaseMessage = message.toLowerCase(); // Normalize message to lowercase
  
      // Greeting condition
      if (lowercaseMessage.includes('hello') || lowercaseMessage.includes('hi')) {
        this.actionProvider.greet();
      }
  
      // Help request condition
      else if (lowercaseMessage.includes('sales')) {
        this.actionProvider.handleHelp();
      }
  
      
  
      // Asking for available properties
      else if (lowercaseMessage.includes('available properties') || lowercaseMessage.includes('listings')) {
        this.actionProvider.showAvailableProperties();
      }
  
      // Asking about mortgage calculations
      else if (lowercaseMessage.includes('services')) {
        this.actionProvider.calculateMortgage();
      }
  
      // Asking for contact information
      else if (lowercaseMessage.includes('contact') || lowercaseMessage.includes('phone number')) {
        this.actionProvider.provideContactInfo();
      }
  
      // Catch-all for unrecognized messages
      else {
        this.actionProvider.handleUnknown();
      }
    }
  }
  
  export default MessageParser;
  