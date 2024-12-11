import "@mdxeditor/editor/style.css";
import { useState } from "react";
import {
    MDXEditor,
    headingsPlugin,
    listsPlugin,
    quotePlugin,
    tablePlugin,
    thematicBreakPlugin,
    markdownShortcutPlugin,
    linkPlugin,
    linkDialogPlugin,
    imagePlugin,
    frontmatterPlugin,
    codeBlockPlugin,
    sandpackPlugin,
    codeMirrorPlugin,
    diffSourcePlugin,
    toolbarPlugin,
    BlockTypeSelect,
    BoldItalicUnderlineToggles,
    ListsToggle,
    CreateLink,
    InsertImage,
    InsertTable,
    InsertThematicBreak,
    UndoRedo,
    Separator,
} from "@mdxeditor/editor";

export default function MDXWriter() {
  const [content, setContent] = useState("");

  return (
    <div className="prose dark:prose-invert max-w-none">
      <MDXEditor
        onChange={setContent}
        markdown=""
        contentEditableClassName="min-h-[500px] !text-foreground p-4 bg-card border rounded-md"
        className="!bg-background border rounded-md"
        plugins={[
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          tablePlugin(),
          thematicBreakPlugin(),
          markdownShortcutPlugin(),
          linkPlugin(),
          linkDialogPlugin(),
          imagePlugin(),
          frontmatterPlugin(),
          codeBlockPlugin(),
          sandpackPlugin(),
          codeMirrorPlugin(),
          diffSourcePlugin(),
          toolbarPlugin({
            toolbarContents: () => (
              <>
                <UndoRedo />
                <Separator />
                <BlockTypeSelect />
                <Separator />
                <BoldItalicUnderlineToggles />
                <Separator />
                <ListsToggle />
                <Separator />
                <CreateLink />
                <InsertImage />
                <InsertTable />
                <InsertThematicBreak />
              </>
            ),
          }),
        ]}
      />
      <div className="mt-8">
        <h3>Raw MDX:</h3>
        <pre className="p-4 bg-muted rounded">{content}</pre>
      </div>
    </div>
  );
}
