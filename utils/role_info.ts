export type roleInfo = {
  value: string
  jp: string
  description: string
}

// 各ロールの情報です

export const Administrator: roleInfo = {
  value: "administrator",
  jp: "管理者",
  description: "管理者権限です"
}
export const ViewChannels: roleInfo = {
  value: "view_channels",
  jp: "チャンネルを見る",
  description: "この権限を持つメンバーは、デフォルトでチャンネルを閲覧できます（プライベートチャンネルを除く）。",
}
export const ManageChannels: roleInfo = {
  value: "manage_channels",
  jp: "チャンネルの管理",
  description: "",
}
export const ManageRoles: roleInfo = {
  value: "manage_roles",
  jp: "ロールの管理",
  description: "",
}
export const CreateExpressions: roleInfo = {
  value: "create_expressions",
  jp: "エクスプレッションを作成",
  description: "",
}
export const ManageExpressions: roleInfo = {
  value: "manage_expressions",
  jp: "絵文字の管理",
  description: "",
}
export const ViewAuditLog: roleInfo = {
  value: "view_audit_log",
  jp: "監査ログを表示",
  description: "",
}
export const ViewServerInsights: roleInfo = {
  value: "view_server_insights",
  jp: "サーバーインサイトを見る",
  description: "",
}
export const ManageWebhooks: roleInfo = {
  value: "manage_webhooks",
  jp: "ウェブフックの管理",
  description: "",
}
export const ManageServer: roleInfo = {
  value: "manage_server",
  jp: "サーバー管理",
  description: "",
}
export const CreateInvite: roleInfo = {
  value: "create_invite",
  jp: "招待を作成",
  description: "",
}
export const ChangeNickname: roleInfo = {
  value: "change_nickname",
  jp: "ニックネームの変更",
  description: "",
}
export const ManageNickname: roleInfo = {
  value: "manage_nickname",
  jp: "ニックネームの管理",
  description: "",
}
export const KickMembers: roleInfo = {
  value: "kick_members",
  jp: "メンバーをキック",
  description: "",
}
export const BanMembers: roleInfo = {
  value: "ban_members",
  jp: "メンバーをBAN",
  description: "",
}
export const TimeoutMembers: roleInfo = {
  value: "timeout_members",
  jp: "メンバーをタイムアウト",
  description: "",
}
export const SendMessages: roleInfo = {
  value: "send_messages",
  jp: "メッセージを送信",
  description: "",
}
export const SendMessagesInThreads: roleInfo = {
  value: "send_messages_in_threads",
  jp: "スレッドでメッセージを送信",
  description: "",
}
export const CreatePublicThreads: roleInfo = {
  value: "create_public_threads",
  jp: "公開スレッドの作成",
  description: "",
}
export const CreatePrivateThreads: roleInfo = {
  value: "create_private_threads",
  jp: "プライベートスレッドの作成",
  description: "",
}
export const EmbedLinks: roleInfo = {
  value: "embed_links",
  jp: "埋め込みリンク",
  description: "",
}
export const AttachFiles: roleInfo = {
  value: "attach_files",
  jp: "ファイルを添付",
  description: "",
}
export const AddReactions: roleInfo = {
  value: "add_reactions",
  jp: "リアクションの追加",
  description: "",
}
export const UseExternalEmoji: roleInfo = {
  value: "use_external_emoji",
  jp: "外部の絵文字を使用する",
  description: "",
}
export const UseExternalStickers: roleInfo = {
  value: "use_external_stickers",
  jp: "外部のスタンプを使用する",
  description: "",
}
export const MentionEveryone: roleInfo = {
  value: "mention_everyone",
  jp: "@everyone,@here,全てのロールにメンション",
  description: "",
}
export const ManageMessages: roleInfo = {
  value: "manage_messages",
  jp: "メッセージの管理",
  description: "",
}
export const ManageThreads: roleInfo = {
  value: "manage_threads",
  jp: "スレッドの管理",
  description: "",
}
export const ReadMessageHistory: roleInfo = {
  value: "read_message_history",
  jp: "メッセージの履歴を読む",
  description: "",
}
export const SendTextToSpeechMessage: roleInfo = {
  value: "send_text_to_speech_message",
  jp: "テキスト読み上げメッセージを送信する",
  description: "",
}
export const UseApplicationCommands: roleInfo = {
  value: "use_application_commands",
  jp: "アプリコマンドを使う",
  description: "",
}
export const SendVoiceMessages: roleInfo = {
  value: "send_voice_messages",
  jp: "ボイスメッセージを送信",
  description: "",
}
export const VcConnect: roleInfo = {
  value: "vc_connect",
  jp: "接続",
  description: "",
}
export const VcSpeak: roleInfo = {
  value: "vc_speak",
  jp: "発言",
  description: "",
}
export const VcVideo: roleInfo = {
  value: "vc_video",
  jp: "WEBカメラ",
  description: "",
}
export const VcUseActivities: roleInfo = {
  value: "vc_use_activities",
  jp: "ユーザーアクティビティ",
  description: "",
}
export const VcUseSoundboard: roleInfo = {
  value: "vc_use_soundboard",
  jp: "サウンドボードを使用",
  description: "",
}
export const VcUseExternalSounds: roleInfo = {
  value: "vc_use_external_sounds",
  jp: "外部のサウンドの使用",
  description: "",
}
export const VcUseVoiceActivity: roleInfo = {
  value: "vc_use_voice_activity",
  jp: "音声検出を使用",
  description: "",
}
export const VcPrioritySpeaker: roleInfo = {
  value: "vc_priority_speaker",
  jp: "優先スピーカー",
  description: "",
}
export const VcMuteMembers: roleInfo = {
  value: "vc_mute_members",
  jp: "メンバーをミュート",
  description: "",
}
export const VcDeafenMembers: roleInfo = {
  value: "vc_deafen_members",
  jp: "メンバーのスピーカーをミュート",
  description: "",
}
export const VcMoveMembers: roleInfo = {
  value: "vc_move_members",
  jp: "メンバーを移動",
  description: "",
}
export const StageRequestToSpeak: roleInfo = {
  value: "stage_request_to_speak",
  jp: "スピーカー参加をリクエスト",
  description: "",
}
export const CreateEvents: roleInfo = {
  value: "create_events",
  jp: "イベントを作成",
  description: "",
}
export const ManageEvents: roleInfo = {
  value: "manage_events",
  jp: "イベントの管理",
  description: ""
}
