// export type permission = {
//   view_channels: boolean,
//   manage_channels: boolean,
//   manage_roles: boolean,
//   create_expressions: boolean,
//   manage_expressions: boolean,
//   view_audit_log: boolean,
//   view_server_insights: boolean,
//   manage_webhooks: boolean,
//   manage_server: boolean,
//   create_invite: boolean,
//   change_nickname: boolean,
//   manage_nickname: boolean,
//   kick_members: boolean,
//   ban_members: boolean,
//   timeout_members: boolean,
//   send_messages: boolean,
//   send_messages_in_threads: boolean,
//   create_public_threads: boolean,
//   create_private_threads: boolean,
//   embed_links: boolean,
//   attach_files: boolean,
//   add_reactions: boolean,
//   use_external_emoji: boolean,
//   use_external_stickers: boolean,
//   mention_everyone: boolean,
//   manage_messages: boolean,
//   manage_threads: boolean,
//   read_message_history: boolean,
//   send_text_to_speech_message: boolean,
//   use_application_commands: boolean,
//   send_voice_messages: boolean,
//   vc_connect: boolean,
//   vc_speak: boolean,
//   vc_video: boolean,
//   vc_use_activities: boolean,
//   vc_use_soundboard: boolean,
//   vc_user_external_sounds: boolean,
//   vc_use_voice_activity: boolean,
//   vc_priority_speaker: boolean,
//   vc_mute_members: boolean,
//   vc_deafen_members: boolean,
//   vc_move_members: boolean,
//   stage_request_to_speak: boolean,
//   create_events: boolean,
//   manage_events: boolean,
//   administrator: boolean
// }

export const permissionNames: Array<{
  value: string
  jp: string
  description: string
}> = [
  {
    value: "administrator",
    jp: "管理者",
    description: "この権限を持つメンバーは、デフォルトでチャンネルを閲覧できます（プライベートチャンネルを除く）。"
  }, {
    value: "view_channels",
    jp: "チャンネルを見る",
    description: "チャンネルを見れます",
  }, {
    value: "manage_channels",
    jp: "チャンネルの管理",
    description: "",
  }, {
    value: "manage_roles",
    jp: "ロールの管理",
    description: "",
  }, {
    value: "create_expressions",
    jp: "エクスプレッションを作成",
    description: "",
  }, {
    value: "manage_expressions",
    jp: "絵文字の管理",
    description: "",
  }, {
    value: "view_audit_log",
    jp: "監査ログを表示",
    description: "",
  }, {
    value: "view_server_insights",
    jp: "サーバーインサイトを見る",
    description: "",
  }, {
    value: "manage_webhooks",
    jp: "ウェブフックの管理",
    description: "",
  }, {
    value: "manage_server",
    jp: "サーバー管理",
    description: "",
  }, {
    value: "create_invite",
    jp: "招待を作成",
    description: "",
  }, {
    value: "change_nickvalue",
    jp: "ニックネームの変更",
    description: "",
  }, {
    value: "manage_nickvalue",
    jp: "ニックネームの管理",
    description: "",
  }, {
    value: "kick_members",
    jp: "メンバーをキック",
    description: "",
  }, {
    value: "ban_members",
    jp: "メンバーをBAN",
    description: "",
  }, {
    value: "timeout_members",
    jp: "メンバーをタイムアウト",
    description: "",
  }, {
    value: "send_messages",
    jp: "メッセージを送信",
    description: "",
  }, {
    value: "send_messages_in_threads",
    jp: "スレッドでメッセージを送信",
    description: "",
  }, {
    value: "create_public_threads",
    jp: "公開スレッドの作成",
    description: "",
  }, {
    value: "create_private_threads",
    jp: "プライベートスレッドの作成",
    description: "",
  }, {
    value: "embed_links",
    jp: "埋め込みリンク",
    description: "",
  }, {
    value: "attach_files",
    jp: "ファイルを添付",
    description: "",
  }, {
    value: "add_reactions",
    jp: "リアクションの追加",
    description: "",
  }, {
    value: "use_external_emoji",
    jp: "外部の絵文字を使用する",
    description: "",
  }, {
    value: "use_external_stickers",
    jp: "外部のスタンプを使用する",
    description: "",
  }, {
    value: "mention_everyone",
    jp: "@everyone,@here,全てのロールにメンション",
    description: "",
  }, {
    value: "manage_messages",
    jp: "メッセージの管理",
    description: "",
  }, {
    value: "manage_threads",
    jp: "スレッドの管理",
    description: "",
  }, {
    value: "read_message_history",
    jp: "メッセージの履歴を読む",
    description: "",
  }, {
    value: "send_text_to_speech_message",
    jp: "テキスト読み上げメッセージを送信する",
    description: "",
  }, {
    value: "use_application_commands",
    jp: "アプリコマンドを使う",
    description: "",
  }, {
    value: "send_voice_messages",
    jp: "ボイスメッセージを送信",
    description: "",
  }, {
    value: "vc_connect",
    jp: "接続",
    description: "",
  }, {
    value: "vc_speak",
    jp: "発言",
    description: "",
  }, {
    value: "vc_video",
    jp: "WEBカメラ",
    description: "",
  }, {
    value: "vc_use_activities",
    jp: "ユーザーアクティビティ",
    description: "",
  }, {
    value: "vc_use_soundboard",
    jp: "サウンドボードを使用",
    description: "",
  }, {
    value: "vc_user_external_sounds",
    jp: "外部のサウンドの使用",
    description: "",
  }, {
    value: "vc_use_voice_activity",
    jp: "音声検出を使用",
    description: "",
  }, {
    value: "vc_priority_speaker",
    jp: "優先スピーカー",
    description: "",
  }, {
    value: "vc_mute_members",
    jp: "メンバーをミュート",
    description: "",
  }, {
    value: "vc_deafen_members",
    jp: "メンバーのスピーカーをミュート",
    description: "",
  }, {
    value: "vc_move_members",
    jp: "メンバーを移動",
    description: "",
  }, {
    value: "stage_request_to_speak",
    jp: "スピーカー参加をリクエスト",
    description: "",
  }, {
    value: "create_events",
    jp: "イベントを作成",
    description: "",
  }, {
    value: "manage_events",
    jp: "イベントの管理",
    description: ""
  },
]

export type role = {
  id: string
  name: string
  permission: {
    [key: string]: boolean
  }
}

export type backendResRoles = {
  roles: Array<role>
}
