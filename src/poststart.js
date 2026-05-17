sc.ScreenInteractEntry.inject({
  update() {
    if (this.callbackObject instanceof sc.MessageModel) {
      if (ig.input.pressed('special')) {
        ig.interact.setBlockDelay();
        this.callbackObject.onInteraction();
      }
    }
    this.parent();
  },
});
