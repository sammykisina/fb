import { useAuth } from "@/hooks";
import { appUtils } from "@/utils";
import { Button, CreateOrEditPost, Notifications, Widget } from "@/components";
import { useDispatch, useSelector } from "react-redux";
import { setShowCreateOrEditPost } from "../../redux/reducer";
import { useNavigate } from "react-router-dom";

const PostCreate = () => {
  /**
   * component states
   */
  const { generateAvatar } = appUtils;
  const { user } = useAuth();
  const dispatch = useDispatch();
  const showCreateOrEditPost = useSelector(
    (state: any) => state.app.client.postManagement.showCreateOrEditPost
  );
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex h-[5rem] w-full items-center rounded-t-[2rem] border p-2">
      <div className="flex w-full items-center justify-between">
        <div>
          <img
            src={generateAvatar(user?.email)}
            alt=""
            className={`${!isAuthenticated && "hidden"} h-16 w-16 rounded-full`}
          />
        </div>

        <Button
          title=" Whats on your mind?"
          intent="primary"
          type="button"
          purpose={() => {
            if (!isAuthenticated) {
              Notifications.errorNotification(
                "Your not authenticated.Please login."
              );
              return navigate("auth/login");
            }

            dispatch(
              setShowCreateOrEditPost({
                showCreateOrEditPost: true,
              })
            );
          }}
        />
      </div>

      <Widget
        widgetState={showCreateOrEditPost}
        component={<CreateOrEditPost />}
        widgetStyles="w-[90vw] h-fit"
      />
    </div>
  );
};

export default PostCreate;
