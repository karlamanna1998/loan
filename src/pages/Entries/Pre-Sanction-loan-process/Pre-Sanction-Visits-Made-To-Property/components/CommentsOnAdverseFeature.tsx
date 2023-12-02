import { useState, useContext } from "preact/hooks";
import { OptionContext } from "../../../../../State-Management/optionContext/context";
import PageBody from "../../../../../shared/components/PageBody/PageBody";
import TextAreaComp from "../../../../../shared/components/TextAreaComp/TextAreaComp";

class commentsOnAdverseFeaturesModel {

  comments: string = '';

}

export const CommentsOnAdverseFeature = () => {
  const [formData, setFormData] = useState<commentsOnAdverseFeaturesModel>(
    new commentsOnAdverseFeaturesModel()
  );
  const dummyoptionArray = [{ value: '' }, { value: 'o1' }];
  const { option } = useContext(OptionContext);
  // function to store input field values in a common form state
  const formValuesController = (inputVal: string, name: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: inputVal,
    }));
  };

  //   function fired on form submit
  const onSubmitHandler = (e) => {
    e.preventDefault();
    alert('submitetd');
  };
  return (
    <>
      <PageBody heading={'Comments on Adverse Features'}>
        <form action="" onSubmit={onSubmitHandler}>
          <TextAreaComp
            formValuesController={formValuesController}
            name="comments"
            value={formData.comments}
            label="Comments on Adverse Features"
            class='cs4'
          />
        </form>
      </PageBody>
    </>
  )
}
