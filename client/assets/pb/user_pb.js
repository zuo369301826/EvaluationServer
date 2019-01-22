/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.pb.ClientMessage', null, global);
goog.exportSymbol('proto.pb.ClientOrder', null, global);
goog.exportSymbol('proto.pb.Login', null, global);
goog.exportSymbol('proto.pb.ServerMessage', null, global);
goog.exportSymbol('proto.pb.ServerOrder', null, global);
goog.exportSymbol('proto.pb.User', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.Login = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.Login, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.pb.Login.displayName = 'proto.pb.Login';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.Login.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.Login.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.Login} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.Login.toObject = function(includeInstance, msg) {
  var f, obj = {
    istrue: jspb.Message.getFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.Login}
 */
proto.pb.Login.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.Login;
  return proto.pb.Login.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.Login} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.Login}
 */
proto.pb.Login.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIstrue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.Login.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.Login.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.Login} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.Login.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIstrue();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool istrue = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.pb.Login.prototype.getIstrue = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.pb.Login.prototype.setIstrue = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.ServerMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.ServerMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.pb.ServerMessage.displayName = 'proto.pb.ServerMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.ServerMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ServerMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ServerMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ServerMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    order: jspb.Message.getFieldWithDefault(msg, 1, 0),
    login: (f = msg.getLogin()) && proto.pb.Login.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.ServerMessage}
 */
proto.pb.ServerMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ServerMessage;
  return proto.pb.ServerMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ServerMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ServerMessage}
 */
proto.pb.ServerMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.pb.ServerOrder} */ (reader.readEnum());
      msg.setOrder(value);
      break;
    case 2:
      var value = new proto.pb.Login;
      reader.readMessage(value,proto.pb.Login.deserializeBinaryFromReader);
      msg.setLogin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.ServerMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ServerMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ServerMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ServerMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrder();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getLogin();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.pb.Login.serializeBinaryToWriter
    );
  }
};


/**
 * optional ServerOrder order = 1;
 * @return {!proto.pb.ServerOrder}
 */
proto.pb.ServerMessage.prototype.getOrder = function() {
  return /** @type {!proto.pb.ServerOrder} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.pb.ServerOrder} value */
proto.pb.ServerMessage.prototype.setOrder = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Login login = 2;
 * @return {?proto.pb.Login}
 */
proto.pb.ServerMessage.prototype.getLogin = function() {
  return /** @type{?proto.pb.Login} */ (
    jspb.Message.getWrapperField(this, proto.pb.Login, 2));
};


/** @param {?proto.pb.Login|undefined} value */
proto.pb.ServerMessage.prototype.setLogin = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.pb.ServerMessage.prototype.clearLogin = function() {
  this.setLogin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.pb.ServerMessage.prototype.hasLogin = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.User = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.User, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.pb.User.displayName = 'proto.pb.User';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.User.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.User.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.User} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.User.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.User}
 */
proto.pb.User.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.User;
  return proto.pb.User.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.User} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.User}
 */
proto.pb.User.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.User.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.User.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.User} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.User.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string username = 1;
 * @return {string}
 */
proto.pb.User.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.pb.User.prototype.setUsername = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.pb.User.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.pb.User.prototype.setPassword = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.ClientMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.ClientMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.pb.ClientMessage.displayName = 'proto.pb.ClientMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.ClientMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ClientMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ClientMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ClientMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    order: jspb.Message.getFieldWithDefault(msg, 1, 0),
    user: (f = msg.getUser()) && proto.pb.User.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.ClientMessage}
 */
proto.pb.ClientMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ClientMessage;
  return proto.pb.ClientMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ClientMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ClientMessage}
 */
proto.pb.ClientMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.pb.ClientOrder} */ (reader.readEnum());
      msg.setOrder(value);
      break;
    case 2:
      var value = new proto.pb.User;
      reader.readMessage(value,proto.pb.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.ClientMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ClientMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ClientMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ClientMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrder();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.pb.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional ClientOrder order = 1;
 * @return {!proto.pb.ClientOrder}
 */
proto.pb.ClientMessage.prototype.getOrder = function() {
  return /** @type {!proto.pb.ClientOrder} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.pb.ClientOrder} value */
proto.pb.ClientMessage.prototype.setOrder = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional User user = 2;
 * @return {?proto.pb.User}
 */
proto.pb.ClientMessage.prototype.getUser = function() {
  return /** @type{?proto.pb.User} */ (
    jspb.Message.getWrapperField(this, proto.pb.User, 2));
};


/** @param {?proto.pb.User|undefined} value */
proto.pb.ClientMessage.prototype.setUser = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.pb.ClientMessage.prototype.clearUser = function() {
  this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.pb.ClientMessage.prototype.hasUser = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * @enum {number}
 */
proto.pb.ServerOrder = {
  SERERORDER_LOGIN: 0
};

/**
 * @enum {number}
 */
proto.pb.ClientOrder = {
  CLIENORDER_LOGIN: 0
};

goog.object.extend(exports, proto.pb);