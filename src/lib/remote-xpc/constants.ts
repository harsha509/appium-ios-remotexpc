// HTTP/2 Constants
export const Http2Constants = {
  HTTP2_MAGIC: Buffer.from('PRI * HTTP/2.0\r\n\r\nSM\r\n\r\n', 'ascii'),
  FRAME_HEADER_SIZE: 9,
  ROOT_CHANNEL: 1,
  REPLY_CHANNEL: 3,
  FLAG_END_HEADERS: 0x4,
  FLAG_ACK: 0x1,
  DEFAULT_SETTINGS_MAX_CONCURRENT_STREAMS: 100,
  DEFAULT_SETTINGS_INITIAL_WINDOW_SIZE: 1048576,
  DEFAULT_WIN_SIZE_INCR: 983041,
  SETTINGS_MAX_CONCURRENT_STREAMS: 0x03,
  SETTINGS_INITIAL_WINDOW_SIZE: 0x04,
} as const;

// XPC Constants
export const XpcConstants = {
  XPC_FLAGS_INIT_HANDSHAKE: 0x00400000,
  XPC_FLAGS_ALWAYS_SET: 0x00000001,
  XPC_FLAGS_DATA_PRESENT: 0x00000100,
  XPC_FLAGS_WANTING_REPLY: 0x00010000,
} as const;
