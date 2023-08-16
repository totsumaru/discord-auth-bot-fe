export type roleTag = "team" | "mod" | "everyone"

export type roleInfo = {
  value: string
  jp: string
  description: string
  tag: roleTag
}

// 各ロールの情報です

export const Administrator: roleInfo = {
  value: "administrator",
  jp: "管理者",
  description: "この権限は全ての権限を持っています。本当に必要な人のみ、この権限を与えましょう。",
  tag: "team",
}
export const ViewChannels: roleInfo = {
  value: "view_channels",
  jp: "チャンネルを見る",
  description: "この権限を持つメンバーは、デフォルトでチャンネルを閲覧できます（プライベートチャンネルを除く）。",
  tag: "everyone",
}
export const ManageChannels: roleInfo = {
  value: "manage_channels",
  jp: "チャンネルの管理",
  description: "チャンネルを作成,編集,削除できます。",
  tag: "mod",
}
export const ManageRoles: roleInfo = {
  value: "manage_roles",
  jp: "ロール(権限)の管理",
  description: "新しいロールの作成、ロールの付与,削除ができます。自分が持っている最高レベルのロール以上のロールは操作できません。",
  tag: "mod",
}
export const CreateExpressions: roleInfo = {
  value: "create_expressions",
  jp: "エクスプレッションを作成",
  description: "カスタム絵文字,スタンプ,サウンドを追加できます。",
  tag: "mod",
}
export const ManageExpressions: roleInfo = {
  value: "manage_expressions",
  jp: "絵文字の管理",
  description: "カスタム絵文字,スタンプ,サウンドを編集,削除できます。",
  tag: "mod",
}
export const ViewAuditLog: roleInfo = {
  value: "view_audit_log",
  jp: "監査ログを表示",
  description: "サーバーで誰がどのような変更を行ったかの記録を閲覧できます。",
  tag: "team",
}
export const ViewServerInsights: roleInfo = {
  value: "view_server_insights",
  jp: "サーバーインサイトを見る",
  description: "サーバーインサイトを閲覧できます。サーバーインサイトでは、コミュニティの成長、エンゲージメントなどのデータが確認できます。",
  tag: "team",
}
export const ManageWebhooks: roleInfo = {
  value: "manage_webhooks",
  jp: "ウェブフックの管理",
  description: "Webhookを作成,編集,削除できます。プログラムや特別な外部botでしか使用することはありません。基本的にはオフにしておきましょう。",
  tag: "team",
}
export const ManageServer: roleInfo = {
  value: "manage_server",
  jp: "サーバー管理",
  description: "このサーバーの名前の変更、地域の変更、全ての招待の閲覧、サーバーへのbotの追加、AutoModルールの作成や更新ができます。",
  tag: "team",
}
export const CreateInvite: roleInfo = {
  value: "create_invite",
  jp: "招待を作成",
  description: "このサーバーに新メンバーを招待できます。",
  tag: "everyone",
}
export const ChangeNickname: roleInfo = {
  value: "change_nickname",
  jp: "ニックネームの変更",
  description: "自分のニックネームを変更し、このサーバーだけで使うカスタムネームにできます。",
  tag: "everyone",
}
export const ManageNickname: roleInfo = {
  value: "manage_nickname",
  jp: "ニックネームの管理",
  description: "他のメンバーのニックネームを変更できます。",
  tag: "mod",
}
export const KickMembers: roleInfo = {
  value: "kick_members",
  jp: "メンバーをキック",
  description: "他のメンバーをこのサーバーから削除（追放）できます。キックされたメンバーは招待があれば、再度サーバーに参加できます。",
  tag: "mod",
}
export const BanMembers: roleInfo = {
  value: "ban_members",
  jp: "メンバーをBAN",
  description: "他のメンバーをこのサーバーからBAN（永久追放）できます。BANされたメンバーは招待リンクを持っていたとしても、サーバーに参加することができません。",
  tag: "mod",
}
export const TimeoutMembers: roleInfo = {
  value: "timeout_members",
  jp: "メンバーをタイムアウト",
  description: "他のメンバーをタイムアウトさせることができます。タイムアウトすると、そのユーザーはチャットでメッセージを送ったり、スレッドで返信したり、リアクションしたりボイスチャットで活動できなくなります。サーバーから追放は行いません。",
  tag: "mod",
}
export const SendMessages: roleInfo = {
  value: "send_messages",
  jp: "メッセージを送信",
  description: "テキストチャンネルでメッセージを送信できます。",
  tag: "everyone",
}
export const SendMessagesInThreads: roleInfo = {
  value: "send_messages_in_threads",
  jp: "スレッドでメッセージを送信",
  description: "スレッドでメッセージを送信できます。",
  tag: "everyone",
}
export const CreatePublicThreads: roleInfo = {
  value: "create_public_threads",
  jp: "公開スレッドの作成",
  description: "特定のチャンネル内の全員が閲覧可能なスレッドを作成できます。",
  tag: "mod",
}
export const CreatePrivateThreads: roleInfo = {
  value: "create_private_threads",
  jp: "プライベートスレッドの作成",
  description: "招待されたメンバー限定のスレッドを作成できます。",
  tag: "mod",
}
export const EmbedLinks: roleInfo = {
  value: "embed_links",
  jp: "埋め込みリンク",
  description: "テキストチャンネルで共有する、埋め込みコンテンツを表示するリンクを許可します。URLの制限ではありませんのでご注意ください。",
  tag: "everyone",
}
export const AttachFiles: roleInfo = {
  value: "attach_files",
  jp: "ファイルを添付",
  description: "テキストチャンネルにファイルやメディア（画像など）をアップロードできます。",
  tag: "everyone",
}
export const AddReactions: roleInfo = {
  value: "add_reactions",
  jp: "リアクションの追加",
  description: "メッセージに新しい絵文字リアクションを追加できます。この権限をOFFにした場合でも、誰かが追加した既存のリアクション絵文字に、自分もリアクションすることは可能です。",
  tag: "everyone",
}
export const UseExternalEmoji: roleInfo = {
  value: "use_external_emoji",
  jp: "外部の絵文字を使用する",
  description: "他のサーバーの絵文字を使用できます。（Discord Nitroサブスクライバーに限る）",
  tag: "everyone",
}
export const UseExternalStickers: roleInfo = {
  value: "use_external_stickers",
  jp: "外部のスタンプを使用する",
  description: "他のサーバーのスタンプを使用できます。（Discord Nitroサブスクライバーに限る）",
  tag: "everyone",
}
export const MentionEveryone: roleInfo = {
  value: "mention_everyone",
  jp: "@everyone,@here,全てのロールにメンション",
  description: "@everyoneや@hereを使用して、全体にメンションすることが可能です。また、全てのロールにメンションすることができるため、運営以外には絶対に権限を付与しないでください。",
  tag: "team",
}
export const ManageMessages: roleInfo = {
  value: "manage_messages",
  jp: "メッセージの管理",
  description: "他のメンバーのメッセージを削除したり、メッセージをピン留めしたりできます。",
  tag: "mod",
}
export const ManageThreads: roleInfo = {
  value: "manage_threads",
  jp: "スレッドの管理",
  description: "スレッドの名称を変更,削除,クローズ,低速モードを有効にするなどの操作ができます。また、全てのプライベートスレッドを閲覧できます。",
  tag: "mod",
}
export const ReadMessageHistory: roleInfo = {
  value: "read_message_history",
  jp: "メッセージの履歴を読む",
  description: "過去にチャンネルで送られたメッセージを読めます。この権限をOFFにした場合、オンライン中かつ自分がそのチャンネルを見ている間のメッセージしか閲覧することができなくなります。",
  tag: "everyone",
}
export const SendTextToSpeechMessage: roleInfo = {
  value: "send_text_to_speech_message",
  jp: "テキスト読み上げメッセージを送信する",
  description: "/ttsをメッセージの始めにつけることで、テキスト読み上げ機能のメッセージを送信できます。",
  tag: "everyone",
}
export const UseApplicationCommands: roleInfo = {
  value: "use_application_commands",
  jp: "アプリコマンドを使う",
  description: "スラッシュコマンドやコンテキストメニューコマンドなど、アプリ(bot)のコマンドの使用が可能です。",
  tag: "everyone"
}
export const SendVoiceMessages: roleInfo = {
  value: "send_voice_messages",
  jp: "ボイスメッセージを送信",
  description: "ボイスメッセージを送信できます。",
  tag: "everyone",
}
export const VcConnect: roleInfo = {
  value: "vc_connect",
  jp: "接続",
  description: "ボイスチャンネルに参加して、他の人の会話を聞くことができます。",
  tag: "everyone",
}
export const VcSpeak: roleInfo = {
  value: "vc_speak",
  jp: "発言",
  description: "ボイスチャンネルで話すことができます。この権限を無効にした場合、メンバーはデフォルトでミュート状態となり、「メンバーをミュート」権限を持つ他のメンバーによってミュート状態を解除されなければ話すことはできません。",
  tag: "everyone",
}
export const VcVideo: roleInfo = {
  value: "vc_video",
  jp: "WEBカメラ",
  description: "このサーバーで動画を共有したり、画面共有を行ったり、ゲーム配信したりできます。",
  tag: "everyone",
}
export const VcUseActivities: roleInfo = {
  value: "vc_use_activities",
  jp: "ユーザーアクティビティ",
  description: "このサーバーでアクティビティを使用できます。アクティビティとはDiscord上でボイスチャンネルに参加しているユーザーがミニゲームなどを使用して遊ぶことができる機能です。",
  tag: "everyone",
}
export const VcUseSoundboard: roleInfo = {
  value: "vc_use_soundboard",
  jp: "サウンドボードを使用",
  description: "サウンドボードからサウンドを送信できます。サウンドボードは、同じボイスチャンネルの参加者全員が聞くことができる短いオーディオクリップを再生できるボイスチャンネル機能です。",
  tag: "everyone",
}
export const VcUseExternalSounds: roleInfo = {
  value: "vc_use_external_sounds",
  jp: "外部のサウンドの使用",
  description: "他のサーバーのサウンドを使用できます（Discord Nitroサブスクライバーに限る）",
  tag: "everyone",
}
export const VcUseVoiceActivity: roleInfo = {
  value: "vc_use_voice_activity",
  jp: "音声検出を使用",
  description: "ボイスチャンネルで話す際、普通に話し始める以外の操作を必要としません。この権限を無効にした場合、プッシュツートークの使用が求められます。騒音やうるさいメンバーへの対処に便利です。",
  tag: "everyone",
}
export const VcPrioritySpeaker: roleInfo = {
  value: "vc_priority_speaker",
  jp: "優先スピーカー",
  description: "ボイスチャンネルで声が聞き取られやすくなります。有効にすると、この権限を持たないメンバーの音量が自動的に下がります。",
  tag: "mod",
}
export const VcMuteMembers: roleInfo = {
  value: "vc_mute_members",
  jp: "メンバーをミュート",
  description: "ボイスチャンネルでメンバーをミュートできます。このミュートをされると、誰にも話すことはできません。",
  tag: "mod",
}
export const VcDeafenMembers: roleInfo = {
  value: "vc_deafen_members",
  jp: "メンバーのスピーカーをミュート",
  description: "ボイスチャンネルで他メンバーのスピーカーをミュートにできます。ミュートされたメンバーは話したり、他のメンバーの声を聞いたりできなくなるので、聞かれたくない話がある場合はメンバーをミュートします。",
  tag: "mod",
}
export const VcMoveMembers: roleInfo = {
  value: "vc_move_members",
  jp: "メンバーを移動",
  description: "他のメンバーを切断または他のボイスチャンネルへ移動させることができます（権限をもつメンバーがアクセスできるボイスチャンネルに限る）",
  tag: "mod",
}
export const StageRequestToSpeak: roleInfo = {
  value: "stage_request_to_speak",
  jp: "スピーカー参加をリクエスト",
  description: "ステージチャンネルで話すためのリクエストを許可します。ステージ・モデレーターが各リクエストを手動で許可・拒否する必要があります。",
  tag: "everyone",
}
export const CreateEvents: roleInfo = {
  value: "create_events",
  jp: "イベントを作成",
  description: "イベントを作成できます。",
  tag: "mod",
}
export const ManageEvents: roleInfo = {
  value: "manage_events",
  jp: "イベントの管理",
  description: "イベントを編集またはキャンセルできます。",
  tag: "mod",
}
