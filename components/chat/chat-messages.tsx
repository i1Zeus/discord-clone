"use client";

import { Fragment } from "react";
import { format } from "date-fns";

import { ChatWelcome } from "./chat-welcome";
import { Loader2, ServerCrash } from "lucide-react";
import { useChatQuery } from "@/hooks/use-chat-query";
import { Member, Message, Profile } from "@prisma/client";
import { ChatItem } from "./chat-item";

interface ChatMessagesProps {
  name: string;
  member: Member;
  chatId: string;
  apiUrl: string;
  socketUrl: string;
  socketQuery: Record<string, string>;
  paramKey: "channelId" | "conversationId";
  paramValue: string;
  type: "channel" | "conversation";
}

const DATE_FORMATE = "d MMM yyyy, HH:mm";

type MessageWithMemberWithProfile = Message & {
  member: Member & {
    profile: Profile;
  };
};

export const ChatMessages = ({
  name,
  member,
  chatId,
  apiUrl,
  socketUrl,
  socketQuery,
  paramKey,
  paramValue,
  type,
}: ChatMessagesProps) => {
  const queryKey = `chat:${chatId}`;

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useChatQuery({
      queryKey,
      apiUrl,
      paramKey,
      paramValue,
    });

  if (status === "loading")
    return (
      <div className="flex-1 flex flex-col justify-center items-center">
        <Loader2 className="w-7 h-7 text-zinc-500 animate-spin my-4" />
        <p className="text-xs text-zinc-500 dark:text-zinc-400 capitalize">
          Loading messages
        </p>
      </div>
    );

  if (status === "error")
    return (
      <div className="flex-1 flex flex-col justify-center items-center">
        <ServerCrash className="w-7 h-7 text-red-500 my-4 animate-pulse" />
        <p className="text-xs text-zinc-500 dark:text-zinc-400 capitalize">
          Something went wrong, please try refreshing the page.
        </p>
      </div>
    );

  return (
    <div className="flex-1 flex flex-col overflow-y-auto">
      <div className="flex-1" />
      <ChatWelcome type={type} name={name} />
      <div className="flex flex-col-reverse mt-auto">
        {data?.pages?.map((group, i) => (
          <Fragment key={i}>
            {group.items.map((message: MessageWithMemberWithProfile) => (
              <ChatItem
                currentMember={member}
                member={message.member}
                key={message.id}
                id={message.id}
                content={message.content}
                fileUrl={message.fileUrl}
                deleted={message.deleted}
                timestamp={format(new Date(message.createdAt), DATE_FORMATE)}
                isUpdated={message.updatedAt !== message.createdAt}
                socketUrl={socketUrl}
                socketQuery={socketQuery}
              />
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
