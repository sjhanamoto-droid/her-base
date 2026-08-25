// サイト共通の設定値。導線URL等はここを差し替えるだけで全体に反映されます。

export const SITE_NAME = 'HER BASE';

export const CONTACT_EMAIL = 'info@sjdesign.jp';

// 代表挨拶
export const REP_TITLE = 'HER BASE 代表';
// TODO: 代表者様のお名前に差し替えてください
export const REP_NAME = '◯◯　◯◯';

// 入会申し込み・お問い合わせの導線
// 公式LINEやフォームが用意でき次第、PREREGISTER_URL を差し替えてください。
const MAIL_SUBJECT = 'HER BASE 入会申し込み';
const MAIL_BODY = [
  'お名前（ニックネーム可）：',
  'ご連絡先：',
  '支えている競技・ご関係（例：夫がプロ野球選手 など）：',
  'ご相談・メッセージ：',
  '',
].join('\r\n');

export const PREREGISTER_URL =
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(MAIL_SUBJECT)}&body=${encodeURIComponent(MAIL_BODY)}`;

// ページ内の入会申し込みセクションへスクロール
export const JOIN_ANCHOR = '#join';
