import Run from "../components/Run";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { loadRunList } from "../runSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";

const Main = () => {
  const user = useSelector((state) => state.user);
  const runs = useSelector((state) => state.runs);
  const [trashCanToggled, setTrashCanToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("gitttt");

  useEffect(() => {
    async function fetchData() {
      await fetch(`http://localhost:5000/api/v1/runs/${user?.userId}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((runList) => {
          console.log(runList);
          dispatch(loadRunList(runList));
          navigate("/");
        });
    }
    if (user != null) {
      fetchData();
    }
  }, []);

  const deleteRun = async (run_id) => {
    console.log("works");
    await fetch(`http://localhost:5000/api/v1/runs/${run_id}`, {
      headers: {
        method: "DELETE",
      },
    });
  };

  return (
    <div>
      {user ? (
        <div>
          {trashCanToggled && (
            <Typography sx={{ mt: 2, mb: -2, color: "error.main" }}>
              Click run to delete
            </Typography>
          )}
          <div>
            {runs.map((run) => {
              return (
                <Run run={run} trash={trashCanToggled} deleteRun={deleteRun} />
              );
            })}
          </div>
          <div>
            <Button
              style={{ width: 200, height: 45 }}
              variant="outlined"
              color="error"
              sx={{ mb: 4 }}
              onClick={() => setTrashCanToggled(!trashCanToggled)}
            >
              {trashCanToggled ? "Done" : "Select runs to delete"}
            </Button>
          </div>
        </div>
      ) : (
        <Typography fontFamily={Typography.fontFamily}>
          Login to continue
        </Typography>
      )}
    </div>
  );
};

export default Main;
