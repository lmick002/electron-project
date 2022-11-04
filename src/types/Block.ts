// Types of blocks in editor
type BlockType =
  | 'text'
  | 'heading_1'
  | 'heading_2'
  | 'heading_3'
  | 'bulleted_list_item'
  | 'numbered_list_item'
  | 'to_do'
  | 'toggle'
  | 'child_page'
  | 'child_database'
  | 'embed'
  | 'image'
  | 'video'
  | 'file'
  | 'pdf'
  | 'bookmark'
  | 'callout_1'
  | 'callout_2'
  | 'callout_3'
  | 'quote'
  | 'equation'
  | 'divider'
  // | "table_of_contents"
  | 'column'
  | 'column_list'
  | 'link_preview'
  // | "synced_block"
  // | "template"
  | 'link_to_page'
  | 'table'
  | 'table_row';

type SundaeBlockType =
  | 'media_audio'
  | 'media_video'
  | 'playlist'
  | 'social_embed'
  | 'music_streaming_embed'
  | 'merch_column'
  | 'merch_column_list'
  | 'merch_table'
  | 'merch_row'
  | 'merch_column'
  | 'merch_column_list'
  | 'merch_table'
  | 'merch_row'
  | 'shop_table'
  | 'shop_row'
  | 'shop_column'
  | 'shop_column_list'
  | 'shop_table'
  | 'shop_row'
  | 'budget'
  | 'rollout'
  | 'drumkit'
  | 'sample_pack'
  | 'sample'
  | 'artwork';

type TextAttributes = {
  highlightColor?: string;
  isBold: boolean;
  isCode: boolean;
  isItalic: boolean;
  isStrikethrough: boolean;
  linkURL?: string;
  // range of styled section
  range: number[];
};

export type BlockStyle = {
  attributes: TextAttributes[];
  decorations?: JSON | {};
  indentationLevel?: number | 0;
  listStyle?: 'bullet' | 'number' | 'none';
  textStyle?:
    | 'body'
    | 'collectionCard'
    | 'pageCard'
    | 'playlistCard'
    | 'heading'
    | 'subtitle'
    | 'caption';
  lineStyle?: 'extraLight' | 'light' | 'default' | 'heavy';
};

export type Block = {
  // Block Id
  id: string;
  object: string;
  // block's type
  type: BlockType | SundaeBlockType;
  // id of user that created the block
  createdByUserId: string;
  // id of user that made the latest changes of the block
  modifiedByUserId: string;
  // created timestampt of block
  created: number;
  // last updated timestampt of block
  updated: number;
  // archived is the block archived
  archived: boolean;
  // strigify-ed JSON of the blocks specific properties
  blockProperties: string;
  // style: strigify-ed JSON of the blocks styling
  style?: BlockStyle | {};
  // blocks: array of id string children blocks
  blocks: string[];
  // raw value of block, can be string, url, id of media item id, etc
  content: string;
  // document's id
  documentId?: string;
  //workspace's id
  workspaceId?: string;
  //blocks project's id
  projectId?: string;
  // user's id of who created the block
  userId?: string;
};
