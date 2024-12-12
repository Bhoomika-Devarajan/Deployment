class ActionProvider {
    /**
     * Constructs the ActionProvider instance.
     * 
     * @param {Function} createChatBotMessage - A function to create new chatbot messages.
     * @param {Function} setStateFunc - A function to update the chatbot's state.
     */
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    /**
     * Sends a greeting message to the user.
     */
    greet() {
      const greetingMessage = this.createChatBotMessage("Hello! How can I assist you today?");
      this.addMessageToState(greetingMessage);
    }
  
    /**
     * Provides help information to the user.
     */
    handleHelp() {
      const helpMessage = this.createChatBotMessage("I'm here to help! You can ask me about available properties, mortgage calculations, or any other real estate inquiries.");
      this.addMessageToState(helpMessage);
    }
  
   
  
    /**
     * Displays available properties to the user.
     */
    showAvailableProperties() {
      const propertiesMessage = this.createChatBotMessage("Here are some properties currently available: [List of Properties]");
      this.addMessageToState(propertiesMessage);
    }
  
    /**
     * Handles mortgage calculation requests.
     */
    calculateMortgage() {
      const mortgageMessage = this.createChatBotMessage("Our realty management company offers a wide range of services, including property listing, tenant management, rent collection, property maintenance, and real estate investment advisory.");
      this.addMessageToState(mortgageMessage);
    }
  
    /**
     * Provides contact information to the user.
     */
    provideContactInfo() {
      const contactMessage = this.createChatBotMessage("You can reach our customer support team by calling (123) 456-7892, emailing support@realtycompany.com, or using the live chat feature on our website. We're here to assist you with any questions or concerns.");
      this.addMessageToState(contactMessage);
    }
  
    /**
     * Handles unknown or unrecognized messages.
     */
    handleUnknown() {
      const unknownMessage = this.createChatBotMessage("I'm sorry, I didn't quite understand that. Could you please rephrase?");
      this.addMessageToState(unknownMessage);
    }
  
    /**
     * Adds a message to the chatbot's state.
     * 
     * @param {Object} message - The message object to add to the state.
     */
    addMessageToState(message) {
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }
  }
  
  export default ActionProvider;
  