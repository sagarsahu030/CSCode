#exit point of Matrix
#Simple Solution for Exitpoint of matrix 
public class NewClass4 {

    public static int outofmatrix(int row,int column,int m,int n)
    {
        if(row<0)
            return 1;
        if(column<0)
            return 1;
        if(row>=m)
            return 1;
        if(column>=n)
            return 1;
       else
        return 0;
    }
    public static void exitpoint(int[][] matrix,int m,int n)
    {
        
        int counter=0;
        int [] row_direction={0,1,0,-1};
        int [] column_direction={1,0,-1,0};
        int current_column,current_row,next_column,next_row;
        current_column=0;
        current_row=0;
        next_column=1;
        next_row=0;
        //when starting index is 1 then it goes to downward
        if(matrix[0][0]==1)
        {
            next_column=0;
            next_row=0;
        }
        while(outofmatrix(next_row,next_column,m,n)!=1)
         {
             current_row=next_row;
             current_column=next_column;
             if(matrix[current_row][current_column]==1)
             {
              counter=(counter+1)%4; 
              next_row=current_row+row_direction[counter];
              next_column=current_column+column_direction[counter];
             }
             else
             {
                 next_row=current_row+row_direction[counter];
                 next_column=current_column+column_direction[counter];
             }
         }
        System.out.println("exit point is"+current_row+" "+current_column);
        
    }
    public static void main(String...args)
    {
       int n=3;
       int m=3;
       int[][] matrix={{0,1,1},{0,0,0},{1,0,1}
                                ,{0,0,1}};
       exitpoint(matrix,m,n);
    }
}
