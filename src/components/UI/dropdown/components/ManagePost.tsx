import React, { FC } from "react";
import {
  Button,
  DeletePostConfirmation,
  Icon,
  Modal,
  Link,
} from "@/components";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "@/hooks";
import { HiPencil, HiTrash } from "react-icons/hi2";
import {
  setGlobalPost,
  setIsEditingPost,
  setShowCreateOrEditPost,
  setShowDeletePostConfirmationModal,
} from "../../../../redux/reducer";
import { Post } from "../../../../types/typings.t";

type ManagePostProps = {
  post: Post;
};

const ManagePost: FC<ManagePostProps> = ({ post }) => {
  /**
   * component states
   */
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className="flex flex-col gap-3 border bg-orange/5 px-4 py-3 duration-300">
      {user?.userId === post?.userId && (
        <div className="flex gap-1">
          <Button
            title="Edit Post"
            intent="primary"
            type="button"
            purpose={() => {
              dispatch(setGlobalPost({ globalPost: { ...post } }));
              dispatch(setIsEditingPost({ isEditingPost: true }));
              dispatch(setShowCreateOrEditPost({ showCreateOrEditPost: true }));
            }}
          />

          <div
            onClick={() => {
              dispatch(setGlobalPost({ globalPost: { ...post } }));
              dispatch(
                setShowDeletePostConfirmationModal({
                  showDeletePostConfirmationModal: true,
                })
              );
            }}
            className="flex cursor-pointer items-center gap-2 rounded-full border-red-400 px-2 text-red-500 hover:border"
          >
            <Icon icon={<HiTrash />} />
            <span>Delete</span>
          </div>
        </div>
      )}

      <Link
        route={{ to: `/posts/${post?.id}`, name: "View Post" }}
        fullWidth={false}
        active
        type="small"
        moreActions={() => {
          dispatch(setGlobalPost({ globalPost: { ...post } }));
        }}
      />
    </div>
  );
};

export default ManagePost;
