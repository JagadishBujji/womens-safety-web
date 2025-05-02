import Toggle from "./toggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const VideoAnalysisTabs = () => {
  const isViolenceDetected = true;

  return (
    <Tabs defaultValue="summary" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="summary">Summary</TabsTrigger>
        <TabsTrigger value="analyse">Analyse</TabsTrigger>
      </TabsList>

      <TabsContent value="summary">
        <div className="p-1 pt-5">
          <h3>
            <b>Summary</b>
          </h3>
          <p>
            Violence Detected:{" "}
            <span
              className={`${
                isViolenceDetected ? "bg-red-500" : "bg-green-500"
              } text-white px-2 py-1 rounded`}
            >
              {isViolenceDetected ? "Yes" : "No"}
            </span>
          </p>
          <p>
            What type of Violence:{" "}
            <span className="font-bold">Physical Violence</span>
          </p>
          <p>
            Other Potential Indicators:{" "}
            <span className="font-bold">Weapon, Alcohol</span>
          </p>
        </div>
      </TabsContent>

      <TabsContent value="analyse">
        <Toggle />
      </TabsContent>
    </Tabs>
  );
};

export default VideoAnalysisTabs;
